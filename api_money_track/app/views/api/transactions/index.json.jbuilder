@transactions.each do |transaction|
  json.set! transaction.id do
    json.partial! 'transaction', locals: { transaction: transaction }
  end
end
