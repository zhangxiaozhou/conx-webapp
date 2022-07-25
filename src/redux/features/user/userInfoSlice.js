import { createSlice } from '@reduxjs/toolkit'
import { loginRequest } from '../../../service/http'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginApi = createAsyncThunk( 
  'users/login',
  async (params, thunkAPI) => {
    const response = await loginRequest(params)

    console.log(response)
    return response
  }
)

export const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    userToken: null,
    me: {
      "uuid": "52a79636b59d4fbda46f13b5fb32a2b2",
      "username": "zhangxiaozhou",
      "parent": {
        "uuid": "99245b197be743c887d1abc7faf90fb4",
        "type": "COMPANY",
        "name": "Shan Tui"
      },
      "parent_unit": null,
      "parent_project": null,
      "parent_company": {
        "uuid": "99245b197be743c887d1abc7faf90fb4",
        "name": "Shan Tui",
        "company_type": "CONSTRUCTION"
      },
      "license": null
    },
    projects: [
      {
        "uuid": "ec2bf3919bca4cadb1103c800e07f12a",
        "type": "PROJECT",
        "name": "Test Project China Smart MC - 2",
        "state": "enabled",
        "project": {
          "disc_quota_used": 42832,
          "bandwidth_quota_used": 0,
          "timezone_offset": 120,
          "coordinate_system": {
            "uuid": "0a33f5ab4e474c139a5de109d582e3bb",
            "name": "Sweref 99 18 00 withoutgeoid.lok",
            "path": "",
            "state": 1,
            "mime": "application/vnd.lok",
            "size": 610,
            "md5_checksum": "1f7a4811b929aac823e7098f39c15061",
            "resource_url": "https://lab.conx.leica-geosystems.com/api/one/v1/data/0a33f5ab4e474c139a5de109d582e3bb/file/",
            "url_expires_at": "2022-07-25T07:37:47.876662Z",
            "created_at": "2022-07-11T09:11:10.217782Z",
            "updated_at": "2022-07-11T09:11:10.525893Z",
            "parent": "ec2bf3919bca4cadb1103c800e07f12a",
            "permissions": [
              "93d1c2aec0034262a1bd3ed35ec4627f"
            ],
            "user": "mojeebahmed",
            "type": "COORDINATESYSTEM",
            "source": {
              "type": "USER",
              "name": "mojeebahmed",
              "uuid": "3aad66b914ad427ab1c47ec0935ba316",
              "parent": "COMPANY"
            },
            "machine_associations": [
              24760
            ],
            "machine_type_associations": [],
            "parent_folder_m_associations": [],
            "parent_folder_mt_associations": [],
            "edited_at": "2022-07-11T09:11:10.217846Z"
          },
          "localization": {
            "uuid": "0a33f5ab4e474c139a5de109d582e3bb",
            "name": "Sweref 99 18 00 withoutgeoid.lok",
            "path": "",
            "state": 1,
            "mime": "application/vnd.lok",
            "size": 610,
            "md5_checksum": "1f7a4811b929aac823e7098f39c15061",
            "resource_url": null,
            "url_expires_at": "2022-07-25T07:37:47.896716Z",
            "created_at": "2022-07-11T09:11:10.217782Z",
            "updated_at": "2022-07-11T09:11:10.525893Z",
            "parent": "ec2bf3919bca4cadb1103c800e07f12a",
            "permissions": [
              "93d1c2aec0034262a1bd3ed35ec4627f"
            ],
            "user": "mojeebahmed",
            "type": "COORDINATESYSTEM",
            "source": {
              "type": "USER",
              "name": "mojeebahmed",
              "uuid": "3aad66b914ad427ab1c47ec0935ba316",
              "parent": "COMPANY"
            },
            "machine_associations": [
              24760
            ],
            "machine_type_associations": [],
            "parent_folder_m_associations": [],
            "parent_folder_mt_associations": [],
            "edited_at": "2022-07-11T09:11:10.217846Z"
          },
          "cloud_storage_quota": 5368709120,
          "cloud_storage_max_file_size": 5368709120,
          "disc_max_file_size": 1073741824,
          "disc_quota": 2251799812636672,
          "has_awareness_licence": false,
          "key": "TEMCJ",
          "timezone": "Europe/Stockholm",
          "bandwidth_quota": 1024,
          "epsg": null,
          "fallback_length_unit": 0
        },
        "parent_uuid": "99245b197be743c887d1abc7faf90fb4",
        "sub_accounts": 1,
        "created_at": "2022-07-11T09:07:35Z",
        "updated_at": "2022-07-18T05:19:32Z",
        "country_name": "China",
        "waffle_flags": {
          "TrustedDevice": true,
          "integration": true,
          "hide_wifi_push_config": true,
          "move_project": true,
          "cost_type": true,
          "user_roles": true,
          "project_data_deletion": true,
          "pair_icon3d": true,
          "Tesla": true,
          "debug_unit": true,
          "display_reference_model_revision_state_in_frontend": true,
          "sync_page": true,
          "VisualMachine": true,
          "rsync_post_xfer_allowed": true,
          "legacy_sync_page": true,
          "show_measure_point_view": true,
          "show_ui2": true,
          "show_used_storage": true,
          "dealer_license_report": true,
          "debug_earthmover_app": true,
          "download_points": true,
          "Captivate": true,
          "weak_spot_analysis": true,
          "files_page": true,
          "show_release_notes": true,
          "split_utilization_storing": true,
          "use_new_tickservice": true,
          "surfacelog_wms": true,
          "earthmover": true,
          "utilization": true,
          "casino_files_tab": true,
          "smart_mc": true
        },
        "custom_attributes": {},
        "has_schedule": false,
        "schedule_template": {},
        "permissions": [
          "list_account",
          "read_account",
          "write_account"
        ],
        "managed_storage_sum": 42832
      },
      {
        "uuid": "f70df27c70ca4409967eeecf1aa4ba22",
        "type": "PROJECT",
        "name": "TestProjectChinaSmartMC",
        "state": "enabled",
        "project": {
          "disc_quota_used": 13273,
          "bandwidth_quota_used": 0,
          "timezone_offset": 480,
          "coordinate_system": {
            "uuid": "e792f7999040433293c08e3467416893",
            "name": "wuhan715.lok",
            "path": "",
            "state": 1,
            "mime": "application/vnd.lok",
            "size": 1064,
            "md5_checksum": "de24be3338fe2a70f1650d5c2e97a39d",
            "resource_url": "https://lab.conx.leica-geosystems.com/api/one/v1/data/e792f7999040433293c08e3467416893/file/",
            "url_expires_at": "2022-07-25T07:37:47.945737Z",
            "created_at": "2022-07-18T06:20:40.899366Z",
            "updated_at": "2022-07-18T06:20:41.396328Z",
            "parent": "f70df27c70ca4409967eeecf1aa4ba22",
            "permissions": [
              "4b7e64154d0b4b13a24e8cf07875c191",
              "3c621b4e6afa4c12bed742fc46d257f8",
              "4c1b140a869845b09f7c8b561e644fff"
            ],
            "user": "dynamic_compaction",
            "type": "COORDINATESYSTEM",
            "source": {
              "type": "USER",
              "name": "dynamic_compaction",
              "uuid": "8fd29c884d3046928103161a6094ccc8",
              "parent": "COMPANY"
            },
            "machine_associations": [],
            "machine_type_associations": [],
            "parent_folder_m_associations": [
              24756
            ],
            "parent_folder_mt_associations": [
              33526
            ],
            "edited_at": "2022-07-18T06:20:40.899433Z"
          },
          "localization": {
            "uuid": "e792f7999040433293c08e3467416893",
            "name": "wuhan715.lok",
            "path": "",
            "state": 1,
            "mime": "application/vnd.lok",
            "size": 1064,
            "md5_checksum": "de24be3338fe2a70f1650d5c2e97a39d",
            "resource_url": null,
            "url_expires_at": "2022-07-25T07:37:47.965132Z",
            "created_at": "2022-07-18T06:20:40.899366Z",
            "updated_at": "2022-07-18T06:20:41.396328Z",
            "parent": "f70df27c70ca4409967eeecf1aa4ba22",
            "permissions": [
              "4b7e64154d0b4b13a24e8cf07875c191",
              "3c621b4e6afa4c12bed742fc46d257f8",
              "4c1b140a869845b09f7c8b561e644fff"
            ],
            "user": "dynamic_compaction",
            "type": "COORDINATESYSTEM",
            "source": {
              "type": "USER",
              "name": "dynamic_compaction",
              "uuid": "8fd29c884d3046928103161a6094ccc8",
              "parent": "COMPANY"
            },
            "machine_associations": [],
            "machine_type_associations": [],
            "parent_folder_m_associations": [
              24756
            ],
            "parent_folder_mt_associations": [
              33526
            ],
            "edited_at": "2022-07-18T06:20:40.899433Z"
          },
          "cloud_storage_quota": 5368709120,
          "cloud_storage_max_file_size": 5368709120,
          "disc_max_file_size": 1073741824,
          "disc_quota": 2251799812636672,
          "has_awareness_licence": false,
          "key": "TESRB",
          "timezone": "Asia/Shanghai",
          "bandwidth_quota": 1024,
          "epsg": null,
          "fallback_length_unit": 0
        },
        "parent_uuid": "99245b197be743c887d1abc7faf90fb4",
        "sub_accounts": 4,
        "created_at": "2022-06-29T14:07:57Z",
        "updated_at": "2022-07-18T06:22:01Z",
        "country_name": "China",
        "waffle_flags": {
          "TrustedDevice": true,
          "integration": true,
          "hide_wifi_push_config": true,
          "move_project": true,
          "cost_type": true,
          "user_roles": true,
          "project_data_deletion": true,
          "pair_icon3d": true,
          "Tesla": true,
          "debug_unit": true,
          "display_reference_model_revision_state_in_frontend": true,
          "sync_page": true,
          "VisualMachine": true,
          "rsync_post_xfer_allowed": true,
          "legacy_sync_page": true,
          "show_measure_point_view": true,
          "show_ui2": true,
          "show_used_storage": true,
          "dealer_license_report": true,
          "debug_earthmover_app": true,
          "download_points": true,
          "Captivate": true,
          "weak_spot_analysis": true,
          "files_page": true,
          "show_release_notes": true,
          "split_utilization_storing": true,
          "use_new_tickservice": true,
          "surfacelog_wms": true,
          "earthmover": true,
          "utilization": true,
          "casino_files_tab": true,
          "smart_mc": true
        },
        "custom_attributes": {},
        "has_schedule": false,
        "schedule_template": {},
        "permissions": [
          "list_account",
          "read_account",
          "write_account"
        ],
        "managed_storage_sum": 13273
      }
    ]
  },
  reducers: { 
  },
  extraReducers: (build)=>{
    build.addCase(loginApi.fulfilled, (state, action) => {
      const data = action.payload  
      const {token} = data

      state.userToken = token
      console.log('token:' + token)
    }) 
  }
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = userInfoSlice.actions

export default userInfoSlice.reducer