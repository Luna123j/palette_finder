class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :imgUrl
      t.string :palette_data
      t.timestamps
    end
  end
end
