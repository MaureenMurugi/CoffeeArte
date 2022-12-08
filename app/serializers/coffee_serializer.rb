class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :coffee_image, :coffee_name, :price, :description, :category, :customer_id
end
