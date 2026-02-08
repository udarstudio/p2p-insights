<script setup>
import { collection, doc, getDocs, increment, setDoc } from 'firebase/firestore'

const pollOptions = ref([])

const selectedOption = ref(null)
const hasVoted = ref(false)
const isLoading = ref(true)
const loadError = ref('')

const storageKey = 'p2p-insights-poll-vote'

const { $firestore } = useNuxtApp()

onMounted(() => {
  if (typeof window === 'undefined') return
  const storedVote = window.localStorage.getItem(storageKey)
  if (storedVote) {
    selectedOption.value = storedVote
    hasVoted.value = true
  }
})

const totalVotes = computed(() =>
  pollOptions.value.reduce((sum, option) => sum + option.votes, 0)
)

const loadVotes = async () => {
  if (!$firestore) {
    loadError.value = 'Voting service not available.'
    isLoading.value = false
    return
  }

  try {
    const snapshot = await getDocs(collection($firestore, 'platform-poll'))
    pollOptions.value = snapshot.docs
      .map((docSnap) => {
        const data = docSnap.data()
        return {
          id: docSnap.id,
          label: data.label ?? docSnap.id,
          votes: Number.isFinite(data.votes) ? data.votes : 0
        }
      })
      .sort((a, b) => b.votes - a.votes || a.label.localeCompare(b.label))
  } catch (error) {
    loadError.value = 'Unable to load votes right now.'
  } finally {
    isLoading.value = false
  }
}

onMounted(loadVotes)

const voteFor = async (option) => {
  if (hasVoted.value) return
  option.votes += 1
  selectedOption.value = option.id
  hasVoted.value = true
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, option.id)
  }
  if (!$firestore) return
  try {
    const optionRef = doc($firestore, 'platform-poll', option.id)
    await setDoc(
      optionRef,
      { label: option.label, votes: increment(1) },
      { merge: true }
    )
  } catch (error) {
    option.votes -= 1
    hasVoted.value = false
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(storageKey)
    }
  }
}
</script>

<template>
  <section
    class="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-6"
    aria-labelledby="poll-title"
  >
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 id="poll-title" class="text-xl font-semibold text-white">
          Vote for the best P2P platform
        </h2>
        <p class="text-sm text-slate-400">
          Quick pulse check from readers. One vote per device.
        </p>
      </div>
      <div class="text-sm text-slate-400">
        {{ totalVotes }} total votes
      </div>
    </div>

    <div class="mt-5 space-y-3">
      <div
        v-if="isLoading"
        class="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-sm text-slate-400"
      >
        Loading votes...
      </div>
      <div
        v-else-if="loadError"
        class="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-200"
      >
        {{ loadError }}
      </div>
      <div
        v-else-if="!pollOptions.length"
        class="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-sm text-slate-400"
      >
        No platforms are available yet.
      </div>
      <div
        v-for="option in pollOptions"
        :key="option.id"
        class="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-2">
            <div class="text-sm font-semibold text-white">
              {{ option.label }}
            </div>
            <div class="h-2 w-full overflow-hidden rounded-full bg-slate-800/70">
              <div
                class="h-full rounded-full bg-emerald-400/80 transition-all"
                :style="{
                  width: totalVotes
                    ? `${Math.round((option.votes / totalVotes) * 100)}%`
                    : '0%'
                }"
              ></div>
            </div>
            <div class="text-xs text-slate-400">
              {{ option.votes }} votes ·
              {{
                totalVotes ? Math.round((option.votes / totalVotes) * 100) : 0
              }}%
            </div>
          </div>

          <button
            class="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="hasVoted"
            @click="voteFor(option)"
          >
            {{ hasVoted && selectedOption === option.id ? 'Voted' : 'Vote' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
