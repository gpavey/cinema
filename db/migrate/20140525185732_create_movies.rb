class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release_year
      t.string :location
      t.float :lat
      t.float :lng
      t.text :fun_fact
      t.string :production_company
      t.string :distributor
      t.string :director
      t.string :writer
      t.string :actor1
      t.string :actor2
      t.string :actor3

      t.timestamp
    end
  end
end
