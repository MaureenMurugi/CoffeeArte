class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :customer_name

  has_many :coffees
end
