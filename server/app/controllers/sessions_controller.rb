class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: {user: @user, message: "success", logged_in: true}
    else
      render json: {message: "Could not authenticate your account"}
    end
  end

  def isLoggedIn?
    
    @current_user = User.find(session[:user_id]) if session[:user_id]
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false,
        user: {}
      }
    end
  end

  def destroy

    session.delete :user_id
    render json: {message: "success"}
  end


  private
    def session_params
        params.require(:user).permit(:email, :password)
    end
end
