<Todo name="Eat" completed={true} id="todo-0"/>
<Todo name="Sleep" completed={false} id="todo-1"/>
<Todo name="Repeat" completed={false} id="todo-2"/>

<li className="todo stack-small">
  <div className="c-cb">
    <input id="todo-1" type="checkbox" />
    <label className="todo-label" htmlFor="todo-1">
      Sleep
    </label>
  </div>
  <div className="btn-group">
    <button type="button" className="btn">
      Edit <span className="visually-hidden">Sleep</span>
    </button>
    <button type="button" className="btn btn__danger">
      Delete <span className="visually-hidden">Sleep</span>
    </button>
  </div>
</li>
<li className="todo stack-small">
  <div className="c-cb">
    <input id="todo-2" type="checkbox" />
    <label className="todo-label" htmlFor="todo-2">
      Repeat
    </label>
  </div>
  <div className="btn-group">
    <button type="button" className="btn">
      Edit <span className="visually-hidden">Repeat</span>
    </button>
    <button type="button" className="btn btn__danger">
      Delete <span className="visually-hidden">Repeat</span>
    </button>
  </div>
</li>
                       || 
                       {taskList}