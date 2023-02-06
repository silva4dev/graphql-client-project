# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: true
    field :name, String, null: true
    field :posts, [Types::PostType], null: true
    field :posts_count, Integer, null: true

    def posts_count 
      object.posts.size
    end
  end
end
