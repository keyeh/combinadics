// Swift implementation of https://www.farside.org.uk/201311/encoding_n_choose_k

func encode(_ choices: [Int]) -> Int {
    let sortedChoices = choices.sorted(by: >)
    var k = sortedChoices.count
    var result = 0
    for choice in sortedChoices {
        result += binom(choice, k)
        k -= 1
    }
    return result
}

func decode(_ N: Int, _ k: Int) -> [Int] {
    var choice = k - 1
    while binom(choice, k) < N {
        choice += 1
    }

    var result: [Int] = []
    var _N = N
    var _K = k
    while(choice >= 0) {
        if (binom(choice, _K) <= _N) {
            _N -= binom(choice, _K);
            _K -= 1
            result.append(choice);
        }
        choice -= 1
    }
    return result
}

func binom(_ n: Int, _ k: Int) -> Int {
    if k == 0 {
        return 1
    }
    return (n * binom(n - 1, k - 1)) / k
}