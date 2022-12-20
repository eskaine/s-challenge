
SELECT balances.address FROM balances
INNER JOIN (
    SELECT address, COUNT(address) AS total_trade FROM trades GROUP BY address
) 
AS tradeCounts ON balances.address = tradeCounts.address
WHERE (
    amount * (
        CASE
			WHEN denom = 'usdc' THEN 0.000001
			WHEN denom = 'swth' THEN 0.00000005
			WHEN denom = 'tmz' THEN 0.003
		END
	)
) > 500 AND block_height > 730000 AND total_trade > 0
