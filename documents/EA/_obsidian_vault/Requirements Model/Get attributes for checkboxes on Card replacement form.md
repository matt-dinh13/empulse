---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL"
domain: "Requirements Model"
element_id: 1589897
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Get attributes for checkboxes on Card replacement form

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL

## 📝 Notes

Rule returns list of checkbox and their attributes, which need to be updated in Card replacement form.

Input:

	
- pcid


Output:

	
- list of checkbox and their attributes



	
- System calls Payment Card system.History.HistoryWS V3 interface with the parameter pcid and based on the interface response sets:
cardStatus = GetCardReponse -> CardStatusHistories[.changeDate is latest].status
cardReason = GetCardReponse -> CardStatusHistories[.changeDate is latest].reason
If system doesn’t receive response during defined time period or data are incomplete or null, then system closes the modal window Card replacement, displays error message MSG_CABUS_UNAVAILABLE (e.g. Error when calling Revolving card system. The action cannot be done. Please try again later.) and rule ends.
	
- System calls CardStatisticsWS.GetCardReplacementCountRequest interface with the parameter pcid.
If the interface response GetCardReplacementCountResponse > 0 then system sets isFirstCardReplacement = False else system sets isFirstCardReplacement = True.
If system doesn’t receive response during defined time period or data are incomplete or null, then system closes the modal window Card replacement, displays error message MSG_CABUS_UNAVAILABLE (e.g. Error when calling Revolving card system. The action cannot be done. Please try again later.) and rule ends.
	
- If card status <> BLOCKED then system sets isPermanentBlock = False else:
- System calls CardBlockWS.GetAllowedCardBlockOperationsForUser interface with the parameter pcid.
- If there is block reason in the interface response with following parameters:
-- blockCardWithBlockReasons -> UserPrivilegeToBlockUnblockCardWithReasonDto.allowed = True
-- blockCardWithBlockReasons -> UserPrivilegeToBlockUnblockCardWithReasonDto.permanent = True
then system sets isPermanentBlock = True else sets isPermanentBlock = False.
If system doesn’t receive response during defined time period or data are incomplete or null, then system closes the modal window Card replacement, displays error message MSG_CABUS_UNAVAILABLE (e.g. Error when calling Revolving card system. The action cannot be done. Please try again later.) and rule ends.
	
- System selects all records from the configuration CardReplacementFormSettings.
System unfilters all records with configuration attributes cardStatus, cardReason, isFirstCardReplacement and isPermanentBlock, which values are not Null and not matching variables with same naming.
If there is multiple configuration records for single checkbox, then system keeps first configuration record with minimum amount of Null attributes.
	
- System returns selected checkboxes and their attributes as list.

## 🔗 Connections (1)

- ← Dependency: [[12.503 Replace card (UseCase 1849963)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options
- Use Case: Other Card operations - Use case
