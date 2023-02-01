class AddUserIdToImages < ActiveRecord::Migration[7.0]
  def change
    add_column :images, :user_id, :integer
    add_index :images, :user_id
  end
end
