---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze"
domain: "Requirements Model"
element_id: 1618828
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Returning LAP approval result into CLIP/CLDP notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze

## 📝 Notes

Both business requirements are solved under this requirement.
LAP approval results’ storage for ContractSupplement:

	
- select s.EVALUATION_REQUEST_TYPE,sr.RESULT, sad.KEY, sad.VALUE from ho.bsl_contract_supplement cs 
join HO.BSL_CONTRACT_SUPPLEMENT_SCORIN css on cs.ID = css.CONTRACT_SUPPLEMENT_ID
join ho.bsl_scoring s on css.SCORING_ID = s.ID
join ho.bsl_scoring_result sr on s.id = sr.SCORING_ID
join HO.BSL_SCORING_ADDITIONAL_DATA sad on sr.ID = sad.SCORING_RESULT_ID


Required outputs (fullpath keys) from the approval result storage:

	
- outputData.processExecution.isRequiredRbpScoring
	
- preResult.instalmentPlan.mmil


Changes marked as CSI-873

## 🔗 Connections (2)

- → Generalization: [[CBL-13407 Adding a recalculation flag into Credit Limit Change notification]]
- → Generalization: [[CBL-13828 Adding a MMIL into Credit Limit Change notification]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze
