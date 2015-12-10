class CreateSubCategories < ActiveRecord::Migration
  def change
    create_table :sub_categories do |t|
      t.string :name
      t.timestamps null: false
      t.references :category
    end
  end
end
