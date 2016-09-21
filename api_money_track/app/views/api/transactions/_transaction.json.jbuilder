json.transaction do
  json.date transaction.date
  json.name transaction.name
  json.amount transaction.amount
  json.type transaction.type
end
