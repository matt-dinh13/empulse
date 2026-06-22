---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze"
domain: "Requirements Model"
element_id: 1618827
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-13407 Adding a recalculation flag into Credit Limit Change notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze

## 📝 Notes

Goal of the task is handover a flag from the LAP response and propagate it in the CLIP request notification. The flag should present a command for recalculation processed by PST.

See also similar task: CBL-13828

Expected impact to CSI Credit limit change functionality:

The flag should be returned in the fullpath of outputData.processExecution.isRbpRequired (confirmed by PH); it is needed to add the flag name into fullpathFilter (definition of output LAP vector data list)
the flag value should be stored in the Scoring entity related to the Contract Supplement (current function but check it!)
the flag will be passed on CreditLimitChange notification, i.e. extension of the current message is needed (optional attribute). Consider group this attribute together with the attribute solved in CBL-13828

## 🔗 Connections (1)

- ← Generalization: [[REQ #1 - Returning LAP approval result into CLIP_CLDP notification]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-13407 Provide capability to Blaze to create another CLIP offer if previous one was cancelled by Blaze
