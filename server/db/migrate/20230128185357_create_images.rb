class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :imgUrl
      t.string :palette_data_in_rgb, array: true, default: []
      t.string :palette_data_in_hex, array: true, default: []
      t.timestamps
    end
  end
end
