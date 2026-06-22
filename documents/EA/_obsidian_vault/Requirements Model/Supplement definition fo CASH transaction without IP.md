---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve"
domain: "Requirements Model"
element_id: 1814406
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Supplement definition fo CASH transaction without IP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve

## 📝 Notes

Supplement definition:

	
- Code = FLEXI
	
- Name =
	
- Supplement Type = TRANSACTION
	
- Transaction Type = 'FLEXI_CASH' - cash without any conversion into the installment plan; POS = EMI_VAS


HO.BSL_EVALUATION_REQUEST_DEF

	
- Approval Priority = 3
	
- Channel Code = TRANSACTION
	
- SCORING_TYPE = TRANSACTIONSCORING
	
- SOURCE_SYSTEM_CODE = SIR
	
- INITIAL_WF_CODE = MAIN
	
- PRIORITY = 3


select sps.* from ho.bsl_supplement sup 
join HO.BSL_SUPPLEMENT_PROCESS_SETTING sps  on sup.id = sps.SUPPLEMENT_ID
where 1=1
and sup.CODE ='EMI_VAS'
--and sup.CREDIT_LIMIT_CHANGE_TYPE = 'CLIP'
;

loanProcessTypeConfig:
   purpose: "EPP"
   transactionType: "RPD"
   loanProcessType: "EMI_VAS"

## 🔗 Connections (1)

- → Generalization: [[CSI-2861 SIR - Process support update for FLEXI]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve
