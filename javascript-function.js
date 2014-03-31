/*
A string S consisting only of letters "A", "B" and "C" is given. This string can be transformed according to one of the following rules:

1. substitute some occurrence of "AB" with "AA", 
2. substitute some occurrence of "BA" with "AA", 
3. substitute some occurrence of "CB" with "CC", 
4. substitute some occurrence of "BC" with "CC", 
5. substitute some occurrence of "AA" with "A", 
6. substitute some occurrence of "CC" with "C".

As long as it is possible to transform the string, a rule is picked at random and the string is transformed according to that rule.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns any string that can result from a sequence of transformations as described above.

For example, given string S = "AABBCC" the function may return "AC" because this is one of the possible sequences of transformations:

"AABBCC" becomes "AAABCC" (rule 1);
"AAABCC" becomes "AABCC" (rule 5);
"AABCC" becomes "AACCC" (rule 4);
"AACCC" becomes "AACC" (rule 6);
"AACC" becomes "ACC" (rule 5);
"ACC" becomes "AC" (rule 5);
no further rule can be applied.
*/

function solution(S) {	
	var A = ['AB', 'BA', 'CB', 'BC', 'AA', 'CC'];
	var B =['AA', 'AA', 'CC', 'CC', 'A', 'C'];
	do{
		j =-1;
		for (i=0; i< A.length; ++i){
			if( S.search(A[i]) != -1){ 
			j++;
			}
			}
		if( j != -1){
			var N = Math.floor((Math.random()*6)+0);
			S = S.replace(A[N], B[N]);
			} else {
			 break;
			}
	} while(j = -1)

		return S;

}
