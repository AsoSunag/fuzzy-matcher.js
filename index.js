module.exports = function (target, entries, opts) {
	var retval = []

	if (typeof target !== "string" || target.length === 0) return retval

	var targetSize = target.length

	if (opts && opts.caseInsensitive) target = target.toLowerCase()

	entries.forEach(function(entry) {
		if (typeof entry !== "string" || entry.length === 0) return

		var entrySize = entry.length

		var compStr = entry
		if (opts && opts.caseInsensitive) compStr = entry.toLowerCase()

		var dist = [[]]
		var LCS = [[], []]

		var index = 0

		for (var i = 0; i <= targetSize; i++)
		{
			index = i&1;
	 
			for (var j = 0; j <= entrySize; j++)
			{
				if (i === 0)
				{
					dist[i][j] = j
					LCS[index][j] = 0
				}
				else if (j === 0)
				{
					dist[i] = []
					dist[i][j] = i
					LCS[index][j] = 0
				}
				else
				{
					if (target[i-1] === compStr[j-1])
					{
						dist[i][j] = dist[i-1][j-1]
					}
					else
					{
						dist[i][j] = 1 + Math.min(dist[i][j-1], dist[i-1][j], dist[i-1][j-1])
					}

					if (target[i-1] === compStr[j-1])
					{
						LCS[index][j] = LCS[1-index][j-1] + 1
					}
					else
					{
						LCS[index][j] = Math.max(LCS[1-index][j], LCS[index][j-1])
					}	
				}
			}
		}

		var lcs = LCS[index][entrySize]
		var dist = (Math.max(entrySize, targetSize)-dist[targetSize][entrySize])/Math.max(entrySize, targetSize)

		if (lcs > 0)
		{
			if (opts && opts.minDistancePercentage && opts.minDistancePercentage > dist) return
			retval.push({
				value: entry,
				lcs: lcs,
				dist: dist
			})
		}

	})

	return retval.sort(function(a, b) {
		if (a.lcs < b.lcs) return 1
		else if (a.lcs > b.lcs) return -1
		else
		{
			if (a.dist < b.dist) return 1
                        else if (a.dist > b.dist) return -1
			else return 0
		}
	}).map(function(entry) {
		return entry.value
	})
}
