function anagrams(str1, str2) {
  // Your code here
  
  //create a hash atble for each string
  const hash1 = {};
  const hash2 = {};

  //iterate through each string
  for (let i = 0; i < str1.length; i++) {
    //if the character is already in the hash table, increment the frequency
    if (hash1[str1[i]]) {
      hash1[str1[i]]++;
    //otherwise, add the character to the has table with a frequency of 1 
    } else {
      hash1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (hash2[str2[i]]) {
      hash2[str2[i]]++;
    } else {
      hash2[str2[i]] = 1;
    }
  }

  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  const hash1 = {};
  const hash2 = {};
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (hash1[arr1[i]]) {
      hash1[arr1[i]]++;
    } else {
      hash1[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) { 
    if (hash2[arr2[i]]) {
      hash2[arr2[i]]++;
    } else {
      hash2[arr2[i]] = 1;
    }
  }

  for (let key in hash1) {
    if (hash2[key]) {
      newArr.push(Number(key));
    }
  }
  return newArr;
}
//console.log(commonElements([1, 3, 4, 5], [1, 2, 3, 5]));

function duplicate(arr) {
  // Your code here
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
  } else {
    hash[arr[i]] = 1;
    }
  } 
  //console.log(hash)

  for (key in hash) {
    if (hash[key] === 2) {
      return Number(key);
    }
  }
  return 'duplicate not found'
}
//console.log(duplicate([1,2,3,4,5,6]))

function twoSum(nums, target) {
  // Your code here
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hash[complement]) {
      return true;
    }
    hash[nums[i]] = i;
  } 
  return false;

}
//console.log(twoSum([2,7,11,15], 22))
//console.log(twoSum([3,4,5], 6))

function wordPattern(pattern, strArr) {
  const charMap = {};
  const wordMap = {};
  const words = strArr;
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (charMap[char] !== undefined) {
      if (wordMap[word] !== charMap[char]) {
        return false;
      }
    } else {
      if (wordMap[word] !== undefined) {
        return false;
      }
      charMap[char] = i;
      wordMap[word] = i;
    }
  }
  return true;
}
console.log(wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']));

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];