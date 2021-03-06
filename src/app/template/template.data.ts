export const TemplateComponentConfig: any =
  {
    'name' : 'Alert Templates',
    'table-columns' : [
      { 'title': 'ID', 'name': 'ID' },
      { 'title': 'TrigerType', 'name': 'TrigerType' },
      { 'title': 'StatFunc', 'name': 'StatFunc' },
      { 'title': 'CritDirection', 'name': 'CritDirection' },
      { 'title': 'ThresholdType', 'name': 'ThresholdType' },
      { 'title': 'TplData', 'name': 'TplData' },
    ]
  };
  export const TableRole : string = 'fulledit';
  export const OverrideRoleActions : Array<Object> = [
    {'name':'export', 'type':'icon', 'icon' : 'glyphicon glyphicon-download-alt text-info', 'tooltip': 'Export item'},
    {'name':'view', 'type':'icon', 'icon' : 'glyphicon glyphicon-eye-open text-success', 'tooltip': 'View item'},
    {'name':'edit', 'type':'icon', 'icon' : 'glyphicon glyphicon-edit text-warning', 'tooltip': 'Edit item'},
    {'name':'remove', 'type':'icon', 'icon' : 'glyphicon glyphicon glyphicon-remove text-danger', 'tooltip': 'Remove item'},
  ]
