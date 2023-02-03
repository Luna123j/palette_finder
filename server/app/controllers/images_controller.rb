class ImagesController < ApplicationController
  def new
    if session[:user_id]
      @current_user = User.find(session[:user_id])
      @images= @current_user.images
      render json: {images: @images}
    else
      render json: {message: 'please login'}
    end
  end

  def create
    if session[:user_id]
      @current_user = User.find(session[:user_id])
      puts '************'
      puts image_params
      image = Image.new(image_params.merge(user_id: @current_user.id))
      if image.save
        render json: {images: image, message: 'success'}
      end
    else
      render json: {message: 'please login'}
    end
  end

  def destroy
  end

  private
  def image_params
    params.require(:images).permit(:imgUrl, palette_data: [])
  end
end
