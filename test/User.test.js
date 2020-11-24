import User from '../production/User';


test('Should return email', () => {
    const newUser = new User('Edwin', 'edwin@gmail.com');
    expect(newUser.email).toBe('edwin@gmail.com');
});

test('Should hasSomethingBeenDone return true if done', ()=>{
    const newUser = new User('Edwin', 'edwin@gmail.com');
    newUser.doSomething();
    expect(newUser.hasSomethingBeenDone).toBe(true)
})

test('Should hasSomethingBeenDone return false if not done', ()=>{
    const newUser = new User('Edwin', 'edwin@gmail.com');
    expect(newUser.hasSomethingBeenDone).toBe(false)
})