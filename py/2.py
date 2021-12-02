
FORWARD = 'forward'
DEPTH = 'depth'
AIM = 'aim'
DOWN = 'down'
UP = 'up'

def getPosition1(lines):

	position = {
		FORWARD: 0, 
		DEPTH: 0
	}

	for line in lines:
		direction, value = line.split()
		value = int(value)
		if direction == FORWARD:
			position[FORWARD] += value
		if direction == DOWN:
			position[DEPTH] += value
		if direction == UP:
			position[DEPTH] -= value

	return position


def getPosition2(lines):

	position = {
		FORWARD: 0, 
		DEPTH: 0,
		AIM: 0
	}


	for line in lines:
		direction, value = line.split()
		value = int(value)
		if direction == FORWARD:
			position[FORWARD] += value
			position[DEPTH] += position[AIM] * value
		if direction == DOWN:
			position[AIM] += value
		if direction == UP:
			position[AIM] -= value

	return position


if __name__ == "__main__": 

	with open('../inputs/input2.txt') as f:
		lines = f.readlines()

	position1 = getPosition1(lines)
	position2 = getPosition2(lines)

	print('Result 1: {}'.format(position1[FORWARD] * position1[DEPTH]))
	print('Result 2: {}'.format(position2[FORWARD] * position2[DEPTH]))
