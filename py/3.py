
OXYGEN = 'oxygen'
CO2 = 'co2'


def preCount(lines):
	size_line = len(lines[0].strip())
	size_input = len(lines)
	counts = {i: 0 for i in range(size_line)}

	for line in lines:
		for i in range(size_line):
			counts[i] += 1 if line[i] == '1' else 0
	return counts


def getInt(array):
	binNum = ''.join([str(int(x)) for x in array])
	return int(binNum, 2)


def getPowerConsumption(lines):
	counts = preCount(lines)
	size = len(lines)
	gamma = getInt(map(lambda x:  x >= size / 2, counts.values()))
	epsilon = getInt(map(lambda x: x < size / 2, counts.values()))
	return gamma * epsilon


def getLifeSupportRating(lines, mode, pos = 0):

	size_input = len(lines)
	countOfOne = 0
	lines_ones, lines_zeros = [], []

	for line in lines:
		if line[pos] == '1':
			countOfOne += 1
			lines_ones.append(line)
		else:
			lines_zeros.append(line)

	moreOnes = countOfOne >= size_input / 2

	if (moreOnes and mode == OXYGEN) or (not moreOnes and mode == CO2):
		new_lines = lines_ones
	else:
		new_lines = lines_zeros

	if len(new_lines) == 1:
		return int(new_lines[0], 2)

	return getLifeSupportRating(new_lines, mode, pos + 1)


if __name__ == "__main__": 

	with open('../inputs/input3.txt') as f:
		lines = f.readlines()

	print('Result 1: {}'.format(getPowerConsumption(lines)))

	oxy = getLifeSupportRating(lines, mode=OXYGEN)
	co2 = getLifeSupportRating(lines, mode=CO2)
	print('Result 2: {}'.format(oxy * co2))
	