export const KapacitorTasksComponentRt: any =
  {
    'name' : 'Kapacitor Tasks',
    'table-columns' : [
      {'title':'ServerID','name':'ServerID' },
      {'title':'URL','name':'URL' },
      {'title':'TaskID','name':'ID' },
      {'title':'Type','name':'Type' },
      {'title':'DBRPs','name':'DBRPs' },
      {'title':'Status','name':'Status' },
      {'title':'Executing','name':'Executing' },
      {'title':'Error','name':'Error','transform':'imgwtooltip' },
      {'title':'NumErrors','name':'NumErrors' },
      {'title':'Created','name':'Created','transform':'datetime' },
      {'title':'Modified','name':'Modified','transform':'datetime' },
      {'title':'LastEnabled','name':'LastEnabled','transform':'datetime' },
      /*  
      {'title':'TICKscript','name':'TICKscript' },
      {'title':'Vars','name':'Vars' },
      {'title':'Dot','name':'Dot' },
{'title':'ExecutionStats','name':'ExecutionStats' },
*/
],

    'slug' : 'kapacitortasksrt'
  };
  export const TableRole : string = 'viewonly';
  export const OverrideRoleActions : Array<Object> = [
    {'name':'view', 'type':'icon', 'icon' : 'glyphicon glyphicon-eye-open text-success', 'tooltip': 'View item'},
  ]
