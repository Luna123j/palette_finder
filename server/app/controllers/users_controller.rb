class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  # render view for register
  def new
  end

  #create new user
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: "sucess"
    else
      render json: "failed"
    end
  end

    private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
