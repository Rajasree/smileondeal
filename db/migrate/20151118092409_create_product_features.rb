class CreateProductFeatures < ActiveRecord::Migration
  def change
    create_table :product_features do |t|
      t.string :color
      t.string :size
      t.string :weight
      t.string :storage
      t.integer :price
      t.references :product
      t.timestamps null: false
    end
  end
end
