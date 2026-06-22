---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1817922
diagrams: 4
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}ALG_ECS_PROVIDER

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

The aim of this algorithm is to randomly find ECS Provider considering the weight defined for each ESC Provider. In the wider time frame should be allocating ECS Providers to each DDM statistically match the distribution of ECS just by their weight.
Input: ECS provider type (Bank.DD_Type)


{ADD PAYM 1487 CBL-3093}
If DDM.DDM_Type is not STANDARD, the algorithm ends.
{/ADD}

If DDM is manipulated at Back office (that is, contract status = signed, active), a simpler algorithm is used.

{DEL PAYM 1487 CBL-3093}
{ADD CBL-2504 PAYM-805}
If DDM.eMandate =

	
- true, then as an ECS weight is taken ECS_Provider.eManadateWeight
	
- false, then as an ECS weight is taken ECS_Provider.weight

{/ADD}
{/DEL}

1. System selects ECS_Provider.ECS_Provider_type = input ECS provider type
IF CONTRACT STATUS = SIGNED, ACTIVE
2. System finds alphabetically first (ordered by ECS_PROVIDER.CODE) ECS provider with the highest {ADD CBL-2504 PAYM-805}ECS weight{/ADD} {DEL CBL-2504 PAYM-805}weight (ECS_PROVIDER.WEIGHT_PERCENTAGE){/DEL}
3. System creates relation between found ECS_PROVIDER and current DDM.
ELSE
2. System takes all ECS_PROVIDERs and creates field of intervals according to ADD CBL-2504 PAYM-805}ECS weight{/ADD} {DEL CBL-2504 PAYM-805}weight (ECS_PROVIDER.WEIGHT_PERCENTAGE){/DEL}, e.g.: <0 ECS_A 40) <40 ECS_B 80) <80 ECS_C 100).
3. System generates random number as R = random(SUM(all ADD CBL-2504 PAYM-805}ECS weights{/ADD} {DEL CBL-2504 PAYM-805}(ECS_PROVIDER.WEIGHT_PERCENTAGE){/DEL})).
4. In field of intervals system finds the interval due to random number R. It means system finds corresponding ECS_PROVIDER.
5. System creates relation between founded ECS_PROVIDER and current DDM.

If an error occurred at the getting ECS provider, MSG_DDM_ECS_CONFIG_ERROR message is showed: (e.g. "DDM cannot be created due to missing ECS configuration")

## 🔗 Connections (6)

- ← Dependency: [[Evaluate and set provider for DDM draft]]
- → Realisation «realize»: [[REQ 1_ Change algorithm for choosing ECS provider]]
- → Dependency: [[REQ#3 - Restrict eMandates only to eligible bank branches and ECS providers (PAYM-805)]]
- ← Dependency: [[Check and update provider on DDM]]
- ← Dependency: [[Check and update provider on DDM]]
- ← Dependency: [[Application Processing]]

## 📊 Appears In (4 diagrams)

- Custom: Common Business Rules for Contract Management
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Use Case: Create/Update/Receive DDM
- Use Case: Fill in application
