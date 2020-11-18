class User < ApplicationRecord
  has_secure_password
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}

  has_many :children
end
