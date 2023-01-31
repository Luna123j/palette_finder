class SessionsController < ApplicationController

  def new
  end
  
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {user: current_user, message: "success", logged_in: true}
    else
      render json: {message: "enter valid email or password"}
    end
  end

  def isLoggedIn
    puts session[:user_id]
    if !!session[:user_id] && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        user: {}
      }
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {message: "logout"}
  end
end
