---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11553 (CSI-341) Stop cancellation of requests for Credit limit change on processing timeout"
domain: "Requirements Model"
element_id: 1570448
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - change of the current credit limit change request processing in case BSL doesn't receive a response of the AM for credit limit change request.

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11553 (CSI-341) Stop cancellation of requests for Credit limit change on processing timeout

## 📝 Notes

Currently, BSL cancels the credit limit change request at the result processing when AM doesn't sent a response in defined time.

A new behaviour: 
BSL doesn't cancel credit limit change request at the result processing at all and only create a log record to be able to generate Splunk alert with list of contracts.

## 📊 Appears In (1 diagrams)

- Custom: CBL-11553 (CSI-341) Stop cancellation of requests for Credit limit change on processing timeout
