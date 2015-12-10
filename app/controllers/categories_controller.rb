class CategoriesController < ApplicationController
	def index		
		respond_with Category.all
	end

	def as_json(options = {})
      super(options.merge(include: :sub_categories))
    end
end
