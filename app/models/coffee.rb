class Coffee < ApplicationRecord
  has_many :customers
  has_many :customers, through: :reviews
end
