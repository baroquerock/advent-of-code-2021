def count(li, window = 1):
	result = 0
	prev = sum(li[j] for j in range(window))
	for i in range(window, len(li)):
		curr = prev + li[i] - li[i - window]
		if prev < curr:
			result += 1
		prev = curr
	return result

if __name__ == "__main__": 

	with open('../inputs/input1.txt') as f:
		lines = f.readlines()
		lines = [int(line) for line in lines]

	print('Result 1: {}'.format(count(lines, window = 1)))
	print('Result 2: {}'.format(count(lines, window = 3)))
