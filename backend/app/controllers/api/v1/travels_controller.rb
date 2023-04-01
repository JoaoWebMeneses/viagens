class Api::V1::TravelsController < ApplicationController
  def index
    @travels = Travels.add
    render json: travels
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
