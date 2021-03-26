
class MemberDataService {
  getAllMembers() {
    return [{'id': 1, 'name': 'Alex', 'email': 'alex.kulakevich@gmail.com', 'score': 93,}, 
    {'id': 2, 'name': 'Jason', 'email': 'jason.borne@gmail.com', 'score': 64}, 
    {'id': 3, 'name': 'Helen', 'email': 'helen.smith@hotmail.com', 'score': 87},
    {'id': 4, 'name': 'Derek', 'email': 'derek.lee@hotmail.com', 'score': 46},];;
  }

  getMember(memberId){
    let members = getAllMembers();
    for (const iterator in members) {
      if (member[iterator]['id'] == memberId) {
       return member;
      }
    }
  }
}

const memberService = new MemberDataService();
export default memberService;

