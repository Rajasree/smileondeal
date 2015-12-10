class Product < ActiveRecord::Base
	belongs_to :section
	has_many :product_features
end
