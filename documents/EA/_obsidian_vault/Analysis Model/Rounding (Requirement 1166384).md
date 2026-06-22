---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Business Rules"
domain: "Analysis Model"
element_id: 1166384
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Rounding

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Business Rules

## 📝 Notes

Rounding 
Input parameters:

	
- Value to be rounded (financial amount)
	
- Rounding method
	
- Rounding scale

Output value:

	
- Rounded value


Rounding scale:

Rounding is done according to the type Rounding Scale Type:
If Rounding Scale is decimal number in interval <10^-9, 10^9>, then find the whole number N where N * Rounding Scale is the nearest value (according to chosen rounding method) to Value to be rounded. Then Rounded value =  N * Rounding Scale.
If Rounding Scale = 0 then Rounded value =  Value to be rounded (no rounding).

Note: Keep in mind that if the rounded value is of type Percentage, the rounding is applied on the presented value (i.e. 100 * value saved in DB), e.g. for value = 22.222288%, scale = 0.0001 and method = UP the result is 22.2223%.

Example:
Value to be rounded = 12345.6789
Rounding method = UP
Rounding scale = 0.01 -> Rounded value = 12345.68 
Rounding scale = 100 -> Rounded value = 12400
Rounding scale = 0.2 -> Rounded value = 12345.8

Rounding method:
For detailed description see http://docs.oracle.com/javase/7/docs/api/java/math/RoundingMode.html 
UP (java RoundingMode.CEILING = Rounding mode to round towards positive infinity):
Example (rounded to one digit):
Input Number/Input rounded to one digit with UP rounding
If rounding scale = 1:
5.5          6
2.5          3
1.6          2
1.1          2
1.0          1
0.5          1
-1.0        -1
-1.1        -1
-1.6        -1
-2.5        -2
-5.5        -5
If rounding scale = 0.2:
0.5          0.6
-1.1        -1.2
-1.7        -1.8

DOWN (java RoundingMode.FLOOR = Rounding mode to round towards negative infinity):
Example (rounded to one digit):
Input Number/Input rounded to one digit with FLOOR rounding
If rounding scale = 1:
5.5          5
2.5          2
1.6          1
1.1          1
1.0          1
-1.0        -1
-1.1        -2
-1.6        -2
-2.5        -3
-5.5        -6
If rounding scale = 0.2:
0.5          0.4
-1.1        -1.2
-1.7        -1.8

TRUNC (java RoundingMode.DOWN = Rounding mode to round towards zero):
Example (rounded to one digit):
If rounding scale = 1:
5.5          5
2.5          2
1.6          1
1.1          1
1.0          1
-1.0        -1
-1.1        -1
-1.6        -1
-2.5        -2
-5.5        -5
If rounding scale = 0.2:
0.5          0.4
-1.1        -1.0
-1.7        -1.6

MATH (java RoundingMode.HALF_UP = Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which case round up):
Example (rounded to one digit):
If rounding scale = 1:
5.5          6
2.5          3
1.6          2
1.1          1
1.0          1
-1.0        -1
-1.1        -1
-1.6        -2
-2.5        -3
-5.5        -6
If rounding scale = 0.2:
0.52         0.6
0.497       0.4
0.5           0.6
-1.07      -1.0
-1.71      -1.8
-0.5        -0.6

## 🔗 Connections (5)

- → Dependency: [[Rounding Scale Type]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- ← Dependency: [[Round amount by usage]]
- ← Dependency: [[Maximal Cash Payment Entering]]
- ← Dependency: [[Calculation of Presented IR types]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Evaluation of Presented interest rates
- Custom: General business rules
