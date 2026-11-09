import { reactive, computed } from 'vue'



const savedSubjects = localStorage.getItem('gpaSubjects')
const savedLogin = localStorage.getItem('gpaLogin')



const state = reactive({

  subjects: savedSubjects
    ? JSON.parse(savedSubjects)
    : [],

  isLoggedIn: savedLogin === 'true'

})



const saveData = () => {

  localStorage.setItem(
    'gpaSubjects',
    JSON.stringify(state.subjects)
  )

}



const setLogin = (value) => {

  state.isLoggedIn = value

  localStorage.setItem(
    'gpaLogin',
    value ? 'true' : 'false'
  )

}



const logout = () => {

  state.isLoggedIn = false

  localStorage.setItem(
    'gpaLogin',
    'false'
  )

}



const getGrade = (score) => {

  const value = Number(score)

  if (value >= 80) return 'A'
  if (value >= 75) return 'B+'
  if (value >= 70) return 'B'
  if (value >= 65) return 'C+'
  if (value >= 60) return 'C'
  if (value >= 55) return 'D+'
  if (value >= 50) return 'D'

  return 'F'

}



const getPoint = (grade) => {

  const points = {

    A: 4,
    'B+': 3.5,
    B: 3,
    'C+': 2.5,
    C: 2,
    'D+': 1.5,
    D: 1,
    F: 0

  }

  return points[grade]

}



const addSubject = (subject) => {

  const grade = getGrade(subject.score)

  state.subjects.push({

    id: Date.now(),

    name: subject.name,

    credit: Number(subject.credit),

    score: Number(subject.score),

    grade: grade,

    point: getPoint(grade)

  })

  saveData()

}



const removeSubject = (id) => {

  state.subjects = state.subjects.filter(

    item => item.id !== id

  )

  saveData()

}



const totalCredit = computed(() => {

  return state.subjects.reduce(

    (sum, item) => sum + item.credit,

    0

  )

})



const totalPoint = computed(() => {

  return state.subjects.reduce(

    (sum, item) => sum + item.credit * item.point,

    0

  )

})



const gpa = computed(() => {

  if (totalCredit.value === 0) {

    return 0

  }

  return totalPoint.value / totalCredit.value

})



export const useGpaStore = () => {

  return {

    state,

    addSubject,

    removeSubject,

    getGrade,

    totalCredit,

    totalPoint,

    gpa,

    setLogin,

    logout

  }

}