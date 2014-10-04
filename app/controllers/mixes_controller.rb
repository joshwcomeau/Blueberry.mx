class MixesController < ApplicationController
  def index
    @mixes = params[:keywords] ? Mix.where('name ilike ?',"%#{params[:keywords]}%") : []

    render json: @mixes
  end
end
