class Review < ApplicationRecord
  belongs_to :customer
  belongs_to :coffee
end