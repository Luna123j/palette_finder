class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :imgUrl
      t.string :palette_data, array: true, default: []
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
