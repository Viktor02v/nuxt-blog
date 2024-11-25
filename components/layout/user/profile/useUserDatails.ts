import { account } from '@/lib/appwrite'; 

export const useAppwriteUser = () => {
  const user = ref(null);
  const isLoading = ref(true);
  const error = ref(null);

  const fetchUser = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const userDetails = await account.get();
      user.value = userDetails;
    } catch (err) {
      error.value = err.message || 'Failed to fetch user details';
      user.value = null;
    } finally {
      isLoading.value = false;
    }
  };


  onMounted(fetchUser);

  return {
    user,
    isLoading,
    error,
    fetchUser,
  };
};
