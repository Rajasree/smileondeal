class ProductsController < ApplicationController
  layout 'template'
  def show
  	@products = Product.joins(:product_features).where(section_id: params[:id]).group([:size, :color, :storage, :price, :weight, :product_id])
  	respond_to do |format|
  		format.json { render json: @products.to_json(:include => :product_features) }
  		format.html
  	end
  end
end
