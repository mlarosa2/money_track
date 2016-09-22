json.transaction do
  json.committed transaction.committed.to_s
  json.name transaction.name
  json.amount transaction.amount
  json.type transaction.type
end
