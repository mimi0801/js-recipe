const Quiz = {
  data() {
    return {
      feedback: "",
      quiz: {
        text: "現在、低所得国に暮らす女子の何割が初等教育（小学校）を修了しているでしょう？",
        image: "quiz.png",
        choices: [
          {
            text: "20%",
            isCorrect: false,
            feedback: "残念！思い込みにとらわれてない？",
          },
          {
            text: "40%",
            isCorrect: false,
            feedback: "残念！ちがうよ",
          },
          {
            text: "60%",
            isCorrect: true,
            feedback: "正解！意外と高いなって思った？",
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback

      if (choice.isCorrect) {
        // 次の問題へ
      }
    },
  },
  computed: {
    quizImagePath() {
      return "./images/" + this.quiz.image
    },
  },
}
Vue.createApp(Quiz).mount("#app")
