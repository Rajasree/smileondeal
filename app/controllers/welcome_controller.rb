class WelcomeController < ApplicationController
	layout 'template'
	def index
		@category = Category.all
		respond_to do |format|
			format.json { render json: @category.to_json(:include => {:sub_categories => {:include => :sections}}) }
			format.html
		end
	end
end
