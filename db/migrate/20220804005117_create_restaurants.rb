class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.string :url_link
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
