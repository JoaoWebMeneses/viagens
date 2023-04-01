# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Travel.create(
    nome: Faker::Nation.capital_city,
    desc: Faker::Address.street_address,
    data: Faker::Date.between(from: '2014-04-01', to: '2023-04-01'),
    price: Faker::Number.decimal(l_digits: 2),
)

puts Travel.last