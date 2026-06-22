# LOR-9428 Prepare agreement: ignore request if another prepare is running

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9428 Prepare agreement: ignore request if another prepare is running
- **Diagram ID**: 152730
- **Elements**: 4
- **Connectors**: 1

```mermaid
graph TD
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    n_01_096_Prepare_documentation_externally["01.096 Prepare documentation externally"]
    LOR_9428_Prepare_agreement_ignore_request_if_another_prepare["LOR-9428 Prepare agreement: ignore request if another prepare is running"]
    LOR_9181_Replace_Document_upload_job_with_direct_upload_via_["LOR-9181 Replace Document upload job with direct upload via DMS"]
    LOR_9428_Prepare_agreement_ignore_request_if_another_prepare -->|unnamed| LOR_9181_Replace_Document_upload_job_with_direct_upload_via_
```
