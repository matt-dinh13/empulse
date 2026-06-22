# Automatic jobs

```mermaid
graph TD
    Use_Case_Financing_Scheme_job_processing["Use Case : Financing Scheme - job processing"]
    Activate_Financing_Scheme_version_job["Activate Financing Scheme version - job"]
    Use_Case_Financing_Package_job_processing["Use Case : Financing Package - job processing"]
    Activate_Financing_Package_version_job["Activate Financing Package version - job"]
    Activate_Tariff_version_job["Activate Tariff version - job"]
    Activate_Service_version_job["Activate Service version - job"]
    Activate_Product_version_job["Activate Product version - job"]
    Once_a_day["Once a day"]
    Activate_Product_version_job -->|unnamed| Once_a_day
    Activate_Service_version_job -->|unnamed| Once_a_day
    Activate_Tariff_version_job -->|unnamed| Once_a_day
    Activate_Financing_Package_version_job -->|unnamed| Once_a_day
    Activate_Financing_Scheme_version_job -->|unnamed| Once_a_day
```
